"use client";

import { useEffect, useState, useCallback } from "react";

type SummaryType = {
  information: string;
  topic: string;
};

export const useFetchData = () => {
  const [summary, setSummary] = useState<SummaryType[]>([]);

  const setUrl = useCallback(async (url: string) => {
    try {
      const response = await fetch("http://localhost:4000/api/youtube/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
      });

      const data = await response.json();

      setSummary(data.text);
      return { data: summary };
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { setUrl, summary };
};
