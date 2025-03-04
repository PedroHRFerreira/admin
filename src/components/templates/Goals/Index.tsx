import style from "./styles.module.scss";
import OrganismsCapture from "@/components/organisms/Capture/Index";
import OrganismsGoalMonth from "@/components/organisms/GoalMonth/Index";
const TemplateGoal = () => {
  return (
    <article className={style.goal}>
      <OrganismsCapture />
      <OrganismsGoalMonth />
    </article>
  );
};

export default TemplateGoal;
