import { Request, Response } from 'express';
import { PermissionLevel } from '../../types/server/enums/permission-level.enum';

const uuid = require('uuid');

const users: {
  [key: string]: string;
}[] = [
  {
    admin1: 'pass1'
  },
  {
    player1: 'plaYER1'
  }
];

const userPermissions: {
  [key: string]: PermissionLevel;
}[] = [
  {
    admin1: PermissionLevel.ADMIN
  },
  {
    player1: PermissionLevel.OWNER
  }
];

const sessions: Map<any, Session> = new Map();

function signing(req: Request, res: Response) {
  // get users credentials from the JSON body
  const password = req.body.password;
  const username = req.body.username;

  if (!username) {
    // If the username isn't present, return an HTTP unauthorized code
    res.status(401).end();
    return;
  }

  // validate the password against our data
  // if invalid, send an unauthorized code
  const expectedPassword = users[username];
  if (!expectedPassword || expectedPassword !== password) {
    res.status(401).end();
    return;
  }

  // generate a random UUID as the session token
  const sessionToken = uuid.v4();

  // set the expiry time as 120s after the current time
  const now = new Date();
  const expiresAt = new Date(+now + 120 * 1000);

  // create a session containing information about the user and expiry time
  const session = new Session(username, expiresAt);
  // add the session information to the sessions map
  sessions.set(sessionToken, session);

  // In the response, set a cookie on the client with the name "session_cookie"
  // and the value as the UUID we generated. We also set the expiry time
  res.cookie('session_token', sessionToken, { expires: expiresAt });
  res.end();
}

function logout(req: Request, res: Response) {
  if (!req.cookies) {
    res.status(401).end();
    return;
  }

  const sessionToken = req.cookies['session_token'];
  if (!sessionToken) {
    res.status(401).end();
    return;
  }

  sessions.delete(sessionToken);

  res.cookie('session_token', '', { expires: new Date() });
  res.end();
}

function checkAuth(token: any) {
  const userSession = sessions.get(token);
  if (!userSession?.isExpired()) {
    return true;
  }

  return false;
}

function getSession(token: any) {
  const userSession = sessions.get(token);

  return userSession && !userSession?.isExpired() ? userSession : null;
}

export { getSession, checkAuth, logout, signing };
