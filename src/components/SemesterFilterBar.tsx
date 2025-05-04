
import React from "react";

interface SemesterFilterBarProps {
  semesterFilter: string;
  setSemesterFilter: (value: string) => void;
}

const SemesterFilterBar: React.FC<SemesterFilterBarProps> = ({
  semesterFilter,
  setSemesterFilter,
}) => {
  return (
    <div className="flex items-center gap-2 flex-wrap mb-4">
      <span className="font-semibold text-sm">Semester:</span>
      <button
        className={`px-3 py-1 rounded-full border text-xs ${
          semesterFilter === "all"
            ? "bg-primary text-white"
            : "bg-background text-primary border-primary"
        }`}
        onClick={() => setSemesterFilter("all")}
      >
        All
      </button>
      {[...Array(10)].map((_, idx) => (
        <button
          key={idx + 1}
          className={`px-3 py-1 rounded-full border text-xs ${
            semesterFilter === String(idx + 1)
              ? "bg-primary text-white"
              : "bg-background text-primary border-primary"
          }`}
          onClick={() => setSemesterFilter(String(idx + 1))}
        >
          Sem {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default SemesterFilterBar;
