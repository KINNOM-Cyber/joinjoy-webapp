export type Status = "approve" | "pending" | "reject";

export const statusMapping = (
  status: Status
): { title: string; color: string } => {
  const map: Record<Status, { title: string; color: string }> = {
    approve: {
      title: "ยืนยันเรียบร้อยแล้ว",
      color: "#33BF43",
    },
    pending: {
      title: "กำลังตรวจสอบ",
      color: "#FEDA49",
    },
    reject: {
      title: "ถูกปฏิเสธ",
      color: "#E22424",
    },
  };

  return map[status];
};
