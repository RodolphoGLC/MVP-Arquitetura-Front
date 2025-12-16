const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const api = {
  getTeams: async () => {
    const res = await fetch(`${API_URL}/teams`);
    return res.json();
  },

  getTeamById: async (id) => {
    const res = await fetch(`${API_URL}/teams/${id}`);
    return res.json();
  },

  createTeam: async (team) => {
    const res = await fetch(`${API_URL}/teams`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(team),
    });
    return res.json();
  },

  updateTeam: async (id, team) => {
    const res = await fetch(`${API_URL}/teams/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(team),
    });
    return res.json();
  },

  deleteTeam: async (id) => {
    await fetch(`${API_URL}/teams/${id}`, { method: "DELETE" });
  },
};
