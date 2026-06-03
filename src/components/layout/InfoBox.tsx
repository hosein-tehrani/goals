import type { ReactNode } from "react";
type hintBoxType = {
  mode: "hint";
  children: ReactNode;
};
type warningBoxType = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};
type infoBoxType = hintBoxType | warningBoxType;
export default function InfoBox(props: infoBoxType) {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>warning</h2>
      <p>{children}</p>
    </aside>
  );
}
