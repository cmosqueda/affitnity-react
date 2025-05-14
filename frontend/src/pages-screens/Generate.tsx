// import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Generate() {
  return (
    <>
      <div className="font-dmsans flex flex-col grow max-w-md mx-auto mt-10 mb-5 space-y-4  ">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-1 font-aeonik font-semibold">
              <p>Set Up Done!</p>
            </CardTitle>
            <CardDescription className="text-xl font-manrope text-gray-500 text-[12px]">
              You're All Set! What Would You Like to Generate?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-col space-y-2">
              {/* Exercise plan */}
              <Button className="rounded-2xl md:p-3 md:text-base bg-brand text-snow-white p-2 text-lg hover:bg-amber-700 hover:text-snow-white">
                Exercise Plan
              </Button>

              {/* diet plan */}
              <Button className="rounded-2xl md:p-3 md:text-base bg-emerald text-snow-white p-2 text-lg hover:bg-green-600 hover:text-snow-white">
                Diet Plan
              </Button>

              {/* Exercise and Diet plan */}
              <Button className="rounded-2xl md:p-3 md:text-base bg-moss-black text-snow-white p-2 text-lg hover:bg-neutral-700 hover:text-snow-white">
                Exercise & Diet Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
