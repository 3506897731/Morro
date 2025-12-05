import { GitContributors } from "/Users/morro/CursorProject/Morro/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.120_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc._433fb6db76a6af60b17fcdf324de1a73/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/morro/CursorProject/Morro/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.120_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc._433fb6db76a6af60b17fcdf324de1a73/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
