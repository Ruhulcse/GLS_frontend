import GuideForm from "@/components/Guide/form/GuideForm";
import Card from "@/components/ui/Card";
const CreateGuide = () => {
  return (
    <div className="xl:col-span-2 col-span-1">
      <Card title="Guide Entry">
        <GuideForm />
      </Card>
    </div>
  );
};

export default CreateGuide;
