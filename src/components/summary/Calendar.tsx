import React, { useState } from "react";
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { today, getLocalTimeZone, CalendarDate } from "@internationalized/date";
import { EDimensionality } from "@/type/summary";

interface IProps {
  dimensionality: EDimensionality;
  value: CalendarDate;
  setValue: Function;
}

export default function MyCalendar({
  dimensionality,
  value,
  setValue,
}: IProps) {
  const [open, setOpen] = useState(false);

  const formatDate = (date: CalendarDate) => {
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
    const month = months[date.month];
    const day = date.day;
    const year = date.year;

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

  const changeCalendar = (date: CalendarDate) => {
    setValue(date);
    setOpen(false);
  };

  return (
    <Popover isOpen={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Button
          variant="bordered"
          className="justify-start text-left font-normal"
        >
          {formatDate(value)}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <div>
            <Calendar
              showMonthAndYearPickers
              aria-label="Date (Presets)"
              classNames={{
                content: "w-full",
              }}
              focusedValue={value}
              value={value}
              onChange={changeCalendar}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
