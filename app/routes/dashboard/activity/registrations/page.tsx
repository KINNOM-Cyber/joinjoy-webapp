import { Collapsible } from "radix-ui";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import ClockIcon from "~/assets/icons/clock";
import GroupIcon from "~/assets/icons/group";
import PinIcon from "~/assets/icons/pin";
import Button from "~/components/common/button";
import CollapsibleVolunteerCard, {
  type CollapsibleVolunteerCardProps,
} from "~/components/pages/collapsible-card";

export default function ActivityRegistrationList() {
  const registrationList = useMemo(() => {
    return [
      {
        title: "ช่วยกันเก็บขยะบนทะเล kmutt",
        location: "ทะเล kmutt",
        date: "13:00 - 17:00 อาทิตย์ 27 เม.ย. 2568 - 17:00",
        capacity: 80,
        participants: [
          {
            firstName: "พชรพล",
            lastName: "ศิริวัฒน์",
            gender: "ชาย",
            age: 19,
            congenitalDisease: null,
            contact: "089-123-4567",
            emergencyContact: "081-987-6543",
            reason:
              "อยากพัฒนาทักษะใหม่ ๆ และพบปะเพื่อนใหม่ที่มีความสนใจเหมือนกัน",
            status: "pending",
          },
          {
            firstName: "พชรพล",
            lastName: "ศิริวัฒน์",
            gender: "ชาย",
            age: 19,
            congenitalDisease: null,
            contact: "089-123-4567",
            emergencyContact: "081-987-6543",
            reason:
              "อยากพัฒนาทักษะใหม่ ๆ และพบปะเพื่อนใหม่ที่มีความสนใจเหมือนกัน",
            status: "approve",
          },
          {
            firstName: "พชรพล",
            lastName: "ศิริวัฒน์",
            gender: "ชาย",
            age: 19,
            congenitalDisease: null,
            contact: "089-123-4567",
            emergencyContact: "081-987-6543",
            reason:
              "อยากพัฒนาทักษะใหม่ ๆ และพบปะเพื่อนใหม่ที่มีความสนใจเหมือนกัน",
            status: "approve",
          },
          {
            firstName: "พชรพล",
            lastName: "ศิริวัฒน์",
            gender: "ชาย",
            age: 19,
            congenitalDisease: null,
            contact: "089-123-4567",
            emergencyContact: "081-987-6543",
            reason:
              "อยากพัฒนาทักษะใหม่ ๆ และพบปะเพื่อนใหม่ที่มีความสนใจเหมือนกัน",
            status: "approve",
          },
          {
            firstName: "พชรพล",
            lastName: "ศิริวัฒน์",
            gender: "ชาย",
            age: 19,
            congenitalDisease: null,
            contact: "089-123-4567",
            emergencyContact: "081-987-6543",
            reason:
              "อยากพัฒนาทักษะใหม่ ๆ และพบปะเพื่อนใหม่ที่มีความสนใจเหมือนกัน",
            status: "reject",
          },
          {
            firstName: "พชรพล",
            lastName: "ศิริวัฒน์",
            gender: "ชาย",
            age: 19,
            congenitalDisease: null,
            contact: "089-123-4567",
            emergencyContact: "081-987-6543",
            reason:
              "อยากพัฒนาทักษะใหม่ ๆ และพบปะเพื่อนใหม่ที่มีความสนใจเหมือนกัน",
            status: "approve",
          },
        ],
      },
      {
        title: "ช่วยกันเก็บขยะบนทะเล kmutt",
        location: "ทะเล kmutt",
        date: "13:00 - 17:00 อาทิตย์ 27 เม.ย. 2568 - 17:00",
        capacity: 80,
        participants: [
          {
            firstName: "พชรพล",
            lastName: "ศิริวัฒน์",
            gender: "ชาย",
            age: 19,
            congenitalDisease: null,
            contact: "089-123-4567",
            emergencyContact: "081-987-6543",
            reason:
              "อยากพัฒนาทักษะใหม่ ๆ และพบปะเพื่อนใหม่ที่มีความสนใจเหมือนกัน",
            status: "pending",
          },
          {
            firstName: "พชรพล",
            lastName: "ศิริวัฒน์",
            gender: "ชาย",
            age: 19,
            congenitalDisease: null,
            contact: "089-123-4567",
            emergencyContact: "081-987-6543",
            reason:
              "อยากพัฒนาทักษะใหม่ ๆ และพบปะเพื่อนใหม่ที่มีความสนใจเหมือนกัน",
            status: "approve",
          },
        ],
      },
    ] as CollapsibleVolunteerCardProps[];
  }, []);

  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="flex py-1 items-center mb-4 h-14">
        <h1 className="text-3xl font-semibold text-[#3C60BC]">ผู้สมัคร</h1>
      </div>
      <div className="relative h-full w-full p-4 min-h-0 overflow-y-scroll bg-white rounded-md flex space-y-4 flex-col">
        {registrationList.map((item, i) => (
          <CollapsibleVolunteerCard
            key={i}
            title={item.title}
            date={item.date}
            location={item.location}
            participants={item.participants}
            capacity={item.capacity}
          />
        ))}
      </div>
    </div>
  );
}
