'use server';

import { addDistributionPoints, deleteDistributionPoint } from "@/services/AidPoints";
import { revalidatePath } from "next/cache";

export async function createDistributionPoint(prevState, formData) {
  try {
    const reqData = {
      name: formData.get("name").trim(),
      type: formData.get("type"),
      area: formData.get("area"),
      organization_id: Number(formData.get("organization_id")),
      address: formData.get("address").trim(),
      status: formData.get("status")
    };
    await addDistributionPoints(reqData);
    revalidatePath("/");
    return { success: true, message: "تمت إضافة نقطة التوزيع بنجاح" };
  } catch (error) {
    return { success: false, message: error.message || "فشل في إضافة نقطة التوزيع" };
  }
}

export async function deletePoint(formData) {
  const id = formData.get("id");
  await deleteDistributionPoint(id);
  revalidatePath("/");
}
