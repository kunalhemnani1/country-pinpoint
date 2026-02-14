import { Hono } from 'hono';
import type { TaskResponse } from '@devvit/web/server';
import { context } from '@devvit/web/server';
import { createPost } from '../core/post';

export const scheduler = new Hono();

scheduler.post('/daily-puzzle-post', async (c) => {
  try {
    const post = await createPost();

    console.log(
      `[Scheduler] Daily puzzle post created in r/${context.subredditName} — post ${post.id} at ${new Date().toISOString()}`
    );

    return c.json<TaskResponse>({ status: 'ok' }, 200);
  } catch (error) {
    console.error(`[Scheduler] Failed to create daily puzzle post:`, error);
    return c.json<TaskResponse>({ status: 'ok' }, 200);
  }
});
