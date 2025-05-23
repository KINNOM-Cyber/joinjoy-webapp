import type { ComponentProps } from "react";
import ClockIcon from "~/assets/icons/clock";
import GroupIcon from "~/assets/icons/group";
import PinIcon from "~/assets/icons/pin";
import { statusMapping, type Status } from "~/utils/mapping";

export type VolunteerCardProps = ComponentProps<"div"> & {
  title: string;
  location: string;
  capacity: number;
  date: string;
  organizer?: string;
  subOrganizer?: string;
  thumbnail?: string;
  status?: Status;
};

export default function VolunteerCard({
  title,
  location,
  capacity,
  date,
  organizer = "ไม่ระบุ",
  subOrganizer = "ไม่ระบุ",
  status,
  ...props
}: VolunteerCardProps) {
  return (
    <div
      className="rounded-xl shadow-[0px_4px_4px_0px_#00000040] cursor-pointer"
      {...props}
    >
      <div className="w-full relative rounded-t-xl h-70 border-[1px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/assets/sample-img-1.png"
          loading="lazy"
          alt="thumbnail"
        />
      </div>
      <div className="p-4 border-black/50 border-[1px] border-t-0 rounded-b-xl">
        <p className="text-2xl">{title}</p>
        <div className="my-5.75 space-y-2 text-sm">
          <div className="flex items-center">
            <PinIcon className="mr-3" height={20} width={20} />
            <p className="text-[#1B1D2A]">{location}</p>
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-3" height={20} width={20} />
            <p className="text-[#1B1D2A]">{date}</p>
          </div>
          <div className="flex items-center">
            <GroupIcon className="mr-3" height={20} width={20} />
            <p className="text-[#1B1D2A]">{capacity}</p>
          </div>
        </div>
        <div className="text-sm">
          <p>ผุ้จัด: {organizer}</p>
          <p>ผุ้รับ: {subOrganizer}</p>
        </div>
        {status &&
          (() => {
            const { color, title } = statusMapping(status);
            return (
              <div
                className="flex flex-1 items-center justify-center p-4 border rounded-md mt-5.75"
                style={{ borderColor: color }}
              >
                <p>{title}</p>
              </div>
            );
          })()}
      </div>
    </div>
  );
}
