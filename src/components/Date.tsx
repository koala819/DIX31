"use client";

// date-fns is a modern JavaScript date utility library
// https://date-fns.org/
import { parseISO } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import frFR from "date-fns/locale/fr";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>
      {formatInTimeZone(date, "Europe/Paris", "d LLL yyyy", {
        locale: frFR,
      })}
    </time>
  );
  // view different format() string options here:
  // https://date-fns.org/v2.16.1/docs/format
}
