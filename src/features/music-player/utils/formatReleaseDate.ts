import React from 'react'

export const formatReleaseDate = (dataString:string | undefined | null):string => {

    if (!dataString) return "";

    const date = new Date(dataString.replace(/-/g, '\/'));
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};

