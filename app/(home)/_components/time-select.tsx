"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { MONTH_OPTIONS } from "@/app/_constants/dashboard";
import { useRouter, useSearchParams } from "next/navigation";

export function TimeSelect() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const month = searchParams.get("month");
  const handleMonthChange = (month: string) => {
    push(`/?month=${month}`);
  };

  return (
    <Select
      onValueChange={(value) => handleMonthChange(value)}
      defaultValue={month ?? ""}
    >
      <SelectTrigger className="w-[150px] rounded-full">
        <SelectValue placeholder="Mês" />
      </SelectTrigger>
      <SelectContent>
        {MONTH_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
