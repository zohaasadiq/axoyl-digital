"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Region = "PK" | "INTL";

interface RegionContextValue {
  region: Region | null;
  hydrated: boolean;
  setRegion: (region: Region) => void;
}

const STORAGE_KEY = "axoyl_region";

const RegionContext = createContext<RegionContextValue>({
  region: null,
  hydrated: false,
  setRegion: () => {},
});

function writeRegionCookie(value: Region) {
  try {
    document.cookie = `${STORAGE_KEY}=${value}; path=/; max-age=31536000; samesite=lax`;
  } catch {}
}

export function RegionProvider({
  children,
  initialRegion = null,
}: {
  children: React.ReactNode;
  initialRegion?: Region | null;
}) {
  const [region, setRegionState] = useState<Region | null>(initialRegion);
  const [hydrated, setHydrated] = useState(initialRegion !== null);

  useEffect(() => {
    if (initialRegion !== null) return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "PK" || saved === "INTL") {
        setRegionState(saved);
        writeRegionCookie(saved);
      }
    } catch {}
    setHydrated(true);
  }, [initialRegion]);

  const setRegion = (value: Region) => {
    setRegionState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    writeRegionCookie(value);
  };

  return (
    <RegionContext.Provider value={{ region, hydrated, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  return useContext(RegionContext);
}
