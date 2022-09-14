import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes } from "./utils/convert-hour-to-minutes-string";
import { convertMinutesToHoursString } from "./utils/convert-minutes-to-hour-string";
const router = Router();

const prismaClient = new PrismaClient();

router.get("/games", async (request, response) => {
  const games = await prismaClient.game.findMany({
    include: {
      _count: {
        select: { ads: true },
      },
    },
  });

  return response.json(games);
});

router.post("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;
  const ad = request.body;

  const adCreated = await prismaClient.ad.create({
    data: {
      gameId,
      name: ad.name,
      discord: ad.discord,
      yearsPlaying: ad.yearsPlaying,
      weekDays: ad.weekDays.join(","),
      hourStart: convertHourStringToMinutes(ad.hourStart),
      hourEnd: convertHourStringToMinutes(ad.hourEnd),
      useVoiceChannel: ad.useVoiceChannel,
    },
  });

  return response.status(201).json(adCreated);
});

router.get("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;

  const ads = await prismaClient.ad.findMany({
    select: {
      id: true,
      name: true,
      yearsPlaying: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
      useVoiceChannel: true,
    },

    where: {
      gameId,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  const weekDaysFormatted = ads.map((ad) => ({
    ...ad,
    weekDays: ad.weekDays.split(","),
    hourStart: convertMinutesToHoursString(ad.hourStart),
    hourEnd: convertMinutesToHoursString(ad.hourEnd),
  }));

  return response.json(weekDaysFormatted);
});

router.get("/ads/:id/discord", async (request, response) => {
  const adId = request.params.id;

  const ad = await prismaClient.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },

    where: {
      id: adId,
    },
  });

  return response.json({
    discord: ad.discord,
  });
});

export { router };
