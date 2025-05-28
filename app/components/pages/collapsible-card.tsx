import { Collapsible } from "radix-ui";
import { useState } from "react";
import ClockIcon from "~/assets/icons/clock";
import GroupIcon from "~/assets/icons/group";
import PinIcon from "~/assets/icons/pin";
import { cn } from "~/utils/tw-merge";
import Button, { ButtonVariant } from "../common/button";
import Pagination from "../common/pagination";
import { statusMapping } from "~/utils/mapping";

export type CollapsibleVolunteerCardProps = {
  title: string;
  location: string;
  date: string;
  capacity: number;
  participants: {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    congenitalDisease?: string | null;
    contact: string;
    emergencyContact: string;
    reason: string;
    status: "pending" | "approve" | "reject";
  }[];
};

export default function CollapsibleVolunteerCard({
  title,
  location,
  capacity,
  participants,
  date,
}: CollapsibleVolunteerCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <div
          className={cn(
            "p-3 flex items-center w-full border border-[#06060680] rounded-lg cursor-pointer",
            open ? "border-b-0 rounded-b-none" : ""
          )}
        >
          <img
            className="h-35 object-cover w-60 rounded-lg border"
            src="/assets/sample-img-1.png"
            alt="thumbnail"
          />
          <div className="space-y-2 ml-5 flex flex-col justify-between">
            <p className="font-medium">{title}</p>
            <div className="font-light">
              <div className="flex items-center space-x-2">
                <PinIcon className="size-4" />
                <p>{location}</p>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="size-4" />
                <p>{date}</p>
              </div>
              <div className="flex items-center space-x-2">
                <GroupIcon className="size-4" />
                <p>{capacity} คน</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <p>ผุ้จัด: KMUTT</p>
              <p>ผุ้รับ: ไม่ระบุ</p>
            </div>
          </div>
          <div className="ml-auto text-center text-sm mr-10">
            <p>จำนวนผู้สมัคร</p>
            <p>{participants.length} คน</p>
          </div>
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content asChild>
        <div className="border border-[#06060680] p-4 rounded-lg border-t-0 rounded-t-none">
          <div className="flex flex-col">
            <div className="relative min-w-0 w-full overflow-x-scroll rounded-lg border border-gray-200">
              <table className="w-max text-sm">
                <thead className="bg-gray-100 text-left">
                  <tr className="border-b border-gray-200">
                    <th className="px-6 py-5 font-semibold">ลำดับ</th>
                    <th className="px-6 py-5 font-semibold">ชื่อจริง</th>
                    <th className="px-6 py-5 font-semibold">นามสกุล</th>
                    <th className="px-6 py-5 font-semibold">เพศ</th>
                    <th className="px-6 py-5 font-semibold">อายุ</th>
                    <th className="px-6 py-5 font-semibold">โรคประจำตัว</th>
                    <th className="px-6 py-5 font-semibold">เบอร์โทร</th>
                    <th className="px-6 py-5 font-semibold">
                      เบอร์ติดต่อฉุกเฉิน
                    </th>
                    <th className="px-6 py-5 w-70 font-semibold">
                      เหตุผลที่อยากเข้าร่วม
                    </th>
                    <th className="px-6 py-5 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((participant, i) => (
                    <tr className="odd:bg-gray-50 border-b border-gray-200 last:border-b-0">
                      <td className="px-6 py-3 text-center">{i + 1}</td>
                      <td className="px-6 py-3">{participant.firstName}</td>
                      <td className="px-6 py-3">{participant.lastName}</td>
                      <td className="px-6 py-3">{participant.gender}</td>
                      <td className="px-6 py-3">{participant.age}</td>
                      <td className="px-6 py-3">
                        {participant.congenitalDisease ?? "ไม่ระบุ"}
                      </td>
                      <td className="px-6 py-3">{participant.contact}</td>
                      <td className="px-6 py-3">
                        {participant.emergencyContact}
                      </td>
                      <td className="px-6 py-3 w-70">{participant.reason}</td>
                      <td className="px-6 py-3">
                        <div className="flex items-center space-x-2">
                          {participant.status == "pending" ? (
                            <>
                              <Button
                                className="border-[#3CBC59]"
                                variant={ButtonVariant.OUTLINE}
                              >
                                อนุมัติ
                              </Button>
                              <Button
                                className="border-[#E72E2E]"
                                variant={ButtonVariant.OUTLINE}
                              >
                                ไม่อนุมัติ
                              </Button>
                            </>
                          ) : (
                            <Button
                              disabled
                              className="w-full"
                              style={{
                                borderColor: statusMapping(participant.status)
                                  .color,
                              }}
                              variant={ButtonVariant.OUTLINE}
                            >
                              {statusMapping(participant.status).title}
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {participants.length > 10 && (
              <div className="mx-auto mt-6">
                <Pagination
                  pageLimit={10}
                  //   onPageChange={getCurrentPage}
                  total={participants.length}
                />
              </div>
            )}
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
