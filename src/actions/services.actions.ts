"use server";

import { connectMongoDB } from "@/lib/db";
import Services, { IService } from "@/models/services";

export async function seeder() {
  const lorem =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ullam doloremque nam impedit. Possimus distinctio consequatur";

  const services = [
    { title: "Corporate Car Rental", desc: lorem },
    { title: "Car Rental with Driver", desc: lorem },
    { title: "Airport Transfer", desc: lorem },
    { title: "Fleet Leasing", desc: lorem },
    { title: "VIP Transfer", desc: lorem },
    { title: "Private Transfer", desc: lorem },
  ];
  try {
    connectMongoDB();
    services.forEach((___) => {
      const service = new Services({
        title: ___.title,
        description: ___.desc,
      });
      service.save();

      return { status: 201 };
    });
  } catch (error) {
    console.log(error);
    return { status: 500, error };
  }
}

export async function fetchServices(): Promise<{
  status: 200 | 404 | 500;
  data?: IService[];
}> {
  try {
    connectMongoDB();
    const services: IService[] = await Services.find();
    console.log({ services });
    if (!services) return { status: 404 };
    return { status: 200, data: services };
  } catch (error) {
    console.log({ error });
    return { status: 500 };
  }
}
