[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Mulyana01/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Mulyana01/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

# World News — Tuesday, 24 November 2026

A single-image summary of the world news of **Tuesday, 24 November 2026**,
built for the make.fun bounty *"Sum up 24 November's world news in one image"*
(slug `news-image-20261124`).

The image is a flat newspaper-style infographic (1024×1024 PNG): a
"WORLD NEWS" banner with the date, six story panels in a 2×3 grid — each with
an icon, a bold headline and a one-line caption — and a footer strip reading
"6 STORIES THAT DEFINED THE DAY".

## The 6 stories

1. **HORMUZ ON FIRE** — Four tankers hit mines in the Strait of Hormuz;
   Iran's IRGC says it attacked a container ship.
2. **HUAWEI FOUND GUILTY** — A US jury convicts Huawei of trade-secret theft
   and bank fraud; it is cleared of racketeering.
3. **UKRAINE STRIKES AT SEA** — Ukrainian drones hit Russian ships in the
   Gulf of Finland and off Libya.
4. **HOSTAGES IN CARTAGENA** — Armed men seize a supermarket in Cartagena,
   Colombia, taking 25 people hostage.
5. **PAKISTAN REACHES SPACE** — China's Shenzhou-24 carries Pakistan's first
   astronaut to the Tiangong space station.
6. **SENEGAL CHAMPIONS AGAIN** — A sports court restores Senegal's Africa
   Cup of Nations title on appeal.

*Sources note: stories cross-checked against the Daily Summary of World
(final 24 Nov 2026 edition) and Reuters' 24 Nov 2026 world summary.*

## How to run

```sh
node main.ts
```

`main.ts` copies the repo's `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
(falling back to `/output/entry.png` when `MAKEFUN_OUTPUT_DIR` is unset),
creating the directory if needed and setting the output to mode 0644. It uses
no network and is deterministic: repeated runs produce byte-identical output.

## Licence

MIT — see [LICENSE](LICENSE).
