export const getProject = (projects, id) => {
  return projects.filter(p => p.id === parseInt(id))[0]
}

export const getProtocol = (project, id, pid = 0) => {
  project = Array.isArray(project) ? getProject(project, pid) : project
  return project.protocols.filter(p => p.id === parseInt(id))[0]
}

export const transForDisplay = val => {
  if (typeof val === 'string') return `"${val}"`
  else return val
}

export const transForValue = display => {
  if (typeof val === 'string') return `"${display}"`
}
