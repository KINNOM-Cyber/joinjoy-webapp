import { useState } from "react";
import Button from "~/components/common/button";
import Input from "~/components/common/input";
import FileUploadDropzone from "~/components/common/upload-file";
import { formDataToObject } from "~/utils/form";

export default function CreateActivityPage() {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const handleSubmit = (formData: FormData) => {
    const formatedData = formDataToObject(formData);
    console.log(formatedData);
  };

  const onUpload = (files: File[]) => {
    const file = files[0];
    setThumbnail(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="flex py-1 items-center mb-4 h-14">
        <h1 className="text-3xl font-semibold text-[#3C60BC]">
          สร้างกิจกรรมของคุณ
        </h1>
      </div>
      <div className="h-full w-full min-h-0 flex flex-col overflow-y-auto p-10 bg-white rounded-md">
        <form action={handleSubmit} className="grid grid-cols-2 space-x-7 p-10">
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="activity-name">
                ชื่อกิจกรรม
              </label>
              <Input
                name="activityName"
                type="text"
                id="activity-name"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="detail">
                รายละเอียดกิจกรรม
              </label>
              <Input name="detail" type="text" id="detail" required />
            </div>

            <div className="flex space-x-4 relative">
              <div className="flex flex-col space-y-2">
                <label className="text-sm" htmlFor="start-date">
                  วันที่เริ่มกิจกรรม
                </label>
                <div className="flex items-center space-x-4">
                  <Input
                    name="startDate"
                    type="date"
                    id="start-date"
                    required
                  />
                  <span className="relative w-4 h-full flex items-center before:content-[''] before:self-center before:w-full before:h-0.25 before:bg-black"></span>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm" htmlFor="end-date">
                  วันที่จบกิจกรรม
                </label>
                <Input name="endDate" type="date" id="end-date" required />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="opacity">
                จำนวนผู้เข้าร่วม
              </label>
              <Input name="opacity" type="number" id="opacity" required />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="location">
                สถานที่จัด
              </label>
              <Input name="location" type="text" id="location" required />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="description">
                ข้อมูลเพิ่มเติม
              </label>
              <Input name="description" type="text" id="description" />
            </div>
            <Button className="bg-[#3C5D9C] text-white">ยืนยันการสร้าง</Button>
          </div>
          <div className="rounded-lg border border-[#D0D0D0] h-max p-5">
            <h2 className="font-semibold text-xl mb-5">
              อัปโหลดรูปกิจกรรม
            </h2>
            <FileUploadDropzone
              onDrop={onUpload}
              inputName="thumbnail"
              accept={{ "image/jpeg": [], "image/png": [] }}
            />
            {thumbnail && (
              <div className="">
                <h2 className="font-semibold text-xl my-5">
                  Preview
                </h2>
                <img className="max-w-full h-50" src={thumbnail} />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
