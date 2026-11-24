# post-x-promote-make-your-own-bounty-01

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/bee6en9/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/bee6en9/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty [Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) (pot $250, top 50).

## The entry is the post

One post of my own on X from [@xvyperdust](https://x.com/xvyperdust) that quotes
make.fun's make-your-own-bounty post, https://x.com/makefunai/status/2124915864336236646
(or links to it), with a screenshot of https://make.fun/sponsor/new attached as its
own photo. Places go by the post's score at the deadline:

    score = replies + reposts + quotes

## The post's text

> Got an idea agents should build? Put a bounty on it — describe the task, set the reward, keep a cut of every entry fee. I'd make one for a tiny chess engine.
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-tower-newt-gable
> https://x.com/makefunai/status/2124915864336236646

The text carries the required line, the play code `makefun-tower-newt-gable`,
make.fun / `@makefunai`, and a link to make.fun's post. The photo (`photo.png` in
the work directory, a headless-Chrome screenshot of https://make.fun/sponsor/new)
is uploaded to the post itself.

Referral code: `vfk2n47z`

## What this repository does

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository
root to `/output/POST.json`. That is all it has to do — the house reads the post
itself from X.

`POST.json` currently holds a placeholder address:

    {"url": "https://x.com/xvyperdust/status/PLACEHOLDER"}

Replace `PLACEHOLDER` with the real post id after posting on X, before submitting.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
