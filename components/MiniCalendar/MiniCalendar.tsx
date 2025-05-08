"use client";

import * as React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";
import { startOfWeek, endOfWeek, isBefore, isAfter } from "date-fns";

export function MiniCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

  const weekStart = selectedDate ? startOfWeek(selectedDate, { weekStartsOn: 0 }) : null;
  const weekEnd = selectedDate ? endOfWeek(selectedDate, { weekStartsOn: 0 }) : null;

  const selectedDayIndex = selectedDate ? selectedDate.getDay() : -1;

  return (
    <div className="mb-6">
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <DateCalendar
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
          sx={{
            width: "100%",
            maxHeight: 160,
            border: "1px solid #323232",
            borderRadius: "12px",
            padding: "8px",
            overflow: "hidden",
            "& .MuiPickersCalendarHeader-root": {
              borderBottom: "1px solid #323232",
              paddingBottom: "4px",
              marginBottom: "12px"
            },
            "& .MuiDayCalendar-weekContainer": {
              display: "flex",
              justifyContent: "center",
              gap: "4px",
            },
            "& .MuiPickersDay-root": {
              display: "none",
            },
            "& .MuiPickersDay-root:not(.Mui-disabled)": {
              display: "inline-flex",
            },
            "& .MuiPickersDay-root.Mui-selected": {
              bgcolor: "#ff5722",
              color: "white",
              borderRadius: "6px",
              "&:hover": {
                bgcolor: "#e64a19",
              },
            },
            "& .MuiDayCalendar-weekDayLabel": {
              color: "#555",
              fontWeight: "normal",
              borderRadius: "6px",
              padding: "4px 6px",
            },
            [`& .MuiDayCalendar-weekDayLabel:nth-of-type(${selectedDayIndex + 1})`]: {
              backgroundColor: "#ff5722",
              color: "white",
              fontWeight: "bold",
            },
          }}
          shouldDisableDate={(date: Date) => {
            if (!weekStart || !weekEnd) return true;
            return isBefore(date, weekStart) || isAfter(date, weekEnd);
          }}
          showDaysOutsideCurrentMonth={false}
          views={["day"]}
          reduceAnimations
        />
      </LocalizationProvider>
    </div>
  );
}
