import Card from "../components/card";
import content from "../content.json";

export default function Page(){
    return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
                    Certifications page
                </h2>
            </div>
        </div>
        <div className="size-full my-10">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                {content.certificates.map((item, index) => (
                    <Card key={index}
                        title={item.title}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
      </div>
    );
};