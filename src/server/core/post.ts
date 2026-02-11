import { reddit } from '@devvit/web/server';
import { getTodaysPuzzle } from '../../shared/puzzles';

export const createPost = async () => {
  const puzzle = getTodaysPuzzle();
  return await reddit.submitCustomPost({
    title: `🌍 Country Pinpoint — Daily Puzzle #${puzzle.id}`,
  });
};
