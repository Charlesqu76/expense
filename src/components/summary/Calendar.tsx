"use client";
import React from "react";
import { EDimensionality } from "@/type/summary";
import { DatePicker } from "antd";
import { Dayjs } from "dayjs";

interface IProps {
  dimensionality: EDimensionality;
  value: Dayjs;
  setValue: Function;
}

export default function MyCalendar({
  dimensionality,
  value,
  setValue,
}: IProps) {
  const formatDate = (date: Dayjs) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.month()];
    const day = date.day();
    const year = date.year();

    switch (dimensionality) {
      case EDimensionality.DAILY:
        return `${month} ${day}, ${year}`;
      case EDimensionality.WEEKLY:
        return `Week of ${month} ${day}, ${year}`;
      case EDimensionality.MONTHLY:
        return `${month} ${year}`;
      case EDimensionality.YEARLY:
        return `${year}`;
      default:
        return `${month} ${day}, ${year}`;
    }
  };

  const changeCalendar = (date: Dayjs) => {
    setValue(date);
  };

  return (
    <DatePicker
      aria-label="Date (Presets)"
      value={value}
      picker={dimensionality as any}
      onChange={changeCalendar}
    />
  );
}
