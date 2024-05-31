export default function Home() {
  const department = [
    {
      category: "Development",
      id: 1,
      tasks: [
        { name: "Jhon Doe", id: 1 },
        { name: "Jhon Dor", id: 2 },
        { name: "Jhon Dot", id: 3 },
        { name: "Jhon Dou", id: 4 },
        { name: "Jhon Doi", id: 5 },
        { name: "Jhon Dor", id: 6 },
        { name: "Jhon Dot", id: 7 },
        { name: "Jhon Dou", id: 8 },
        { name: "Jhon Doi", id: 9 },
        { name: "Jhon Dor", id: 10 },
      ],
    },
    {
      category: "Ui Designer",
      id: 2,
      tasks: [
        { name: "Nabil Doe", id: 11 },
        { name: "Nabil Dor", id: 12 },
        { name: "Nabil Dot", id: 13 },
        { name: "Nabil Dou", id: 14 },
        { name: "Nabil Doi", id: 15 },
        { name: "Nabil Dor", id: 16 },
      ],
    },
  ];

  const projectLists = [
    {
      name: "Project i 1.0",
      status: "Active",
      manage: [
        {
          categoryId: 1,
          teams: [
            {
              employId: 1,
              role: "R",
            },
            {
              employId: 2,
              role: "I",
            },
            {
              employId: 3,
              role: "C",
            },
            {
              employId: 10,
              role: "A",
            },
          ],
        },
        {
          categoryId: 2,
          teams: [
            {
              employId: 11,
              role: "R",
            },
            {
              employId: 12,
              role: "I",
            },
            {
              employId: 13,
              role: "C",
            },
            {
              employId: 16,
              role: "A",
            },
          ],
        },
      ],
    },
    {
      name: "Project i 1.0",
      status: "Active",
      manage: [
        {
          categoryId: 1,
          teams: [
            {
              employId: 1,
              role: "R",
            },
            {
              employId: 7,
              role: "I",
            },
            {
              employId: 3,
              role: "C",
            },
            {
              employId: 10,
              role: "A",
            },
          ],
        },
        {
          categoryId: 2,
          teams: [
            {
              employId: 11,
              role: "R",
            },
            {
              employId: 12,
              role: "I",
            },
            {
              employId: 13,
              role: "C",
            },
            {
              employId: 16,
              role: "A",
            },
          ],
        },
      ],
    },
    {
      name: "Project i 1.0",
      status: "Active",
      manage: [
        {
          categoryId: 1,
          teams: [
            {
              employId: 1,
              role: "R",
            },
            {
              employId: 2,
              role: "I",
            },
            {
              employId: 3,
              role: "C",
            },
            {
              employId: 5,
              role: "A",
            },
          ],
        },
        {
          categoryId: 2,
          teams: [
            {
              employId: 11,
              role: "R",
            },
            {
              employId: 12,
              role: "I",
            },
            {
              employId: 13,
              role: "C",
            },
            {
              employId: 15,
              role: "A",
            },
          ],
        },
      ],
    },
  ];

  const getRole = (project, categoryId, employId) => {
    const manageCategory = project.manage.find(
      (m) => m.categoryId === categoryId
    );
    if (manageCategory) {
      const teamMember = manageCategory.teams.find(
        (t) => t.employId === employId
      );
      if (teamMember) {
        return teamMember.role;
      }
    }
    return null;
  };

  return (
    <main className="p-2">
      <div className="mt-10">
        <table>
          <thead>
            <tr>
              <th colSpan={3}>
                <div className="min-w-[460px]"></div>
              </th>

              {department.map((item) =>
                item.tasks.map((task) => (
                  <th className="vertical-header">
                    <div>{task.name}</div>
                  </th>
                ))
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sl</td>
              <td>Project Name</td>
              <td>Status</td>
              {department.map((item) => (
                <td colSpan={item?.tasks?.length}>{item.category}</td>
              ))}
            </tr>
            {projectLists.map((project, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{project?.name}</td>
                <td>{project?.status}</td>
                {department.map((item) =>
                  item.tasks.map((task) => (
                    <td key={task.id}>
                      {getRole(project, item.id, task.id) || ""}
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
