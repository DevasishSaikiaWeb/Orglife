import { Heading1 } from "@/components/heading";
import { Mail, MapPinIcon, Phone } from "lucide-react";
import Form from "./form";

export function PageDetails() {
  return (
    <section>
      <Heading1
        title={"CONTACT"}
        subtitle={
          "If you’re ready to start something meaningful — or simply want to say hello — we’re here. For a project in mind, you may just have to click a few extra buttons. It would be worth the effort, trust us. And if you’re feeling lazy to do so, just drop us a line. We’ll get back to you."
        }
      />

      <div className="mt-20 flex flex-col md:flex-row gap-12 justify-between">
        <div className=" flex flex-col gap-4 w-1/3 ">
          <div className="flex gap-4 items-start">
            <div className="w-6">
              <MapPinIcon className="inline-block w-6 h-6 mr-2 mt-3" />
            </div>
            <p className="font-small-body mt-2">
              406, Trinity Tower, Opposite Pragati Grand Hotel, Zydus Hospital
              Road, Thaltej Ahmedabad, Gujarat, India
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Phone className="inline-block  w-5 h-5 mr-2 mt-3" />
            <p className="font-small-body mt-2">+91 - 9099897690, 9898946987</p>
          </div>
          <div className="flex gap-4 items-center">
            <Mail className="inline-block w-5 h-5 mr-2 mt-3" />
            <p className="font-small-body mt-2">
              devasish.saikia@orglife.co.in
            </p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}
