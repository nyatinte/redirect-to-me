import { Hono } from 'hono';

const app = new Hono();

app.get('*', (c) => {
  const url = new URL(c.req.url);
  const redirectUrl = url.pathname.substring(1) + url.search;
  return c.redirect(redirectUrl, 302);
});

export default app;
