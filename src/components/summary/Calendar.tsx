"use client";
import React from "react";
import { EDimensionality } from "@/type/summary";
import { DatePicker } from "antd";
import { Dayjs } from "dayjs";

interface IProps {
  dimensionality: EDimensionality;
  value: Dayjs;
  setValue: Function;
  disabled: (current: Dayjs) => boolean;
}

export default function MyCalendar({
  dimensionality,
  value,
  setValue,
  disabled,
}: IProps) {
  return (
    <DatePicker
      aria-label="Date (Presets)"
      value={value}
      picker={dimensionality as any}
      onChange={setValue as any}
      disabledDate={disabled}
    />
  );
}
