import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const data = await api.getTeams();
    setTeams(data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="header-content">
          <h1>Pokémon Teams</h1>
          <p>Create, edit and manage your Pokémon teams</p>
        </div>

        <Link to="/builder" className="primary-home-btn">
          + New Team
        </Link>
      </header>

      <main className="home-content">
        {loading && <p className="status">Loading teams...</p>}

        {!loading && teams.length === 0 && (
          <div className="empty-state">
            <h2>No teams yet</h2>
            <p>Create your first Pokémon team 🚀</p>
            <Link to="/builder" className="primary-btn">
              Create Team
            </Link>
          </div>
        )}

        <div className="teams-grid">
          {teams.map((team) => (
            <div key={team.id} className="team-card">
              <div className="team-card-header">
                <h3>{team.name}</h3>
              </div>

              <div className="team-card-actions">
                <Link to={`/builder/${team.id}`} className="secondary-btn">
                  Edit
                </Link>

                <button
                  className="danger-btn"
                  onClick={() => api.deleteTeam(team.id).then(load)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
