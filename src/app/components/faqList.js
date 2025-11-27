"use client";

export default function FaqList({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={index}
          className="group bg-white p-6 rounded-xl shadow-md border border-gray-200"
        >
          <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
            <span>{item.question}</span>
            <span className="transition-transform group-open:rotate-180">⌄</span>
          </summary>

          <p className="mt-3 text-gray-700">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}