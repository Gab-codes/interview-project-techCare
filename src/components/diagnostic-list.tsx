import { diagnostics } from "@/constants";

const DiagnosticList = () => {
  return (
    <div className="bg-white flex flex-col gap-4 rounded-2xl p-4">
      <h2 className="card-title-24pt mb-3 2xl:mb-4">Diagnostic List</h2>

      <div className="overflow-hidden">
        <table className="w-full border-collapse bg-background rounded-full">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 body-emphasized-14pt">
                Problem/Diagnosis
              </th>
              <th className="text-left py-3 px-4 body-emphasized-14pt">
                Description
              </th>
              <th className="text-left py-3 px-4 body-emphasized-14pt">
                Status
              </th>
            </tr>
          </thead>
        </table>

        <div className="overflow-y-auto max-h-39 mt-2 custom-scrollbar">
          <table className="w-full border-collapse">
            <tbody>
              {diagnostics.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 body-regular-12 2xl:body-regular-14">
                    {item.problem}
                  </td>
                  <td className="py-3 px-4 body-regular-12 2xl:body-regular-14">
                    {item.description}
                  </td>
                  <td className="py-3 px-4 body-regular-12 2xl:body-regular-14">
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;
