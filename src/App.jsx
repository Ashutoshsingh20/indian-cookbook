import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  recipes,
  recipeCategories,
  regionalCollections,
} from "./data/recipes";
import "./App.css";
import LanguageSwitcher from "./components/LanguageSwitcher";

const StatBadge = ({ label, value, accent }) => (
  <div className="stat-badge" style={{ borderColor: accent }}>
    <span className="stat-value" style={{ color: accent }}>
      {value}
    </span>
    <span className="stat-label">{label}</span>
  </div>
);

const RecipeCard = ({ recipe, onSelect }) => (
  <article className="recipe-card" onClick={() => onSelect(recipe)}>
    <div
      className="recipe-card__image"
      style={{ backgroundImage: `url(${recipe.image})` }}
    >
      <div className="recipe-chip">{recipe.cuisine}</div>
    </div>
    <div className="recipe-card__body">
      <header>
        <p className="recipe-category">{recipe.category}</p>
        <h3>{recipe.name}</h3>
        <p className="recipe-description">{recipe.description}</p>
      </header>
      <div className="recipe-meta">
        <span>{recipe.difficulty}</span>
        <span>{recipe.prepTime + recipe.cookTime} mins</span>
        <span>{recipe.servings} servings</span>
      </div>
      <ul className="recipe-tags">
        {recipe.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  </article>
);

const RecipeModal = ({ recipe, onClose }) => (
  <div className="modal" role="dialog" aria-modal="true">
    <div className="modal__backdrop" onClick={onClose} />
    <div className="modal__content">
      <button className="modal__close" onClick={onClose}>
        Close
      </button>
      <div className="modal__hero">
        <img src={recipe.image} alt={recipe.name} />
        <div>
          <p className="recipe-category">{recipe.category}</p>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <div className="recipe-meta">
            <span>{recipe.cuisine}</span>
            <span>{recipe.difficulty}</span>
            <span>
              {recipe.prepTime + recipe.cookTime} mins • {recipe.servings} servings
            </span>
          </div>
        </div>
      </div>

      <section className="modal__grid">
        <div>
          <h3>Ingredients</h3>
          <ul className="bullet-list">
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Steps</h3>
          <ol className="step-list">
            {recipe.steps.map((step, index) => (
              <li key={step}>
                <span>Step {index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="nutrition">
        <div>
          <h4>Nutrition (approx.)</h4>
          <div className="nutrition-grid">
            {Object.entries(recipe.nutrition).map(([key, value]) => (
              <div key={key}>
                <p>{value}</p>
                <small>{key}</small>
              </div>
            ))}
          </div>
        </div>
        <ul className="spotlight">
          {recipe.spotlight?.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);

function App() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [theme, setTheme] = useState("light");

  const filteredRecipes = useMemo(() => {
    const query = search.toLowerCase();
    return recipes.filter((recipe) => {
      const matchesCategory =
        category === "All" || recipe.category === category;
      const matchesQuery =
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some((item) => item.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    });
  }, [category, search]);

  const stats = useMemo(() => {
    const regions = new Set(recipes.map((recipe) => recipe.cuisine));
    return [
      { label: "Regional styles", value: regions.size, accent: "#f97316" },
      { label: "Curated recipes", value: recipes.length, accent: "#38bdf8" },
      { label: "Ready in under", value: "15-55 mins", accent: "#a855f7" },
    ];
  }, []);

  return (
    <div className="app-shell" data-theme={theme}>
      <header className="hero-section">
        <p className="eyebrow">{t("header.title")} • India Edition</p>
        <LanguageSwitcher />
        <div className="theme-toggle">
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {t("buttons.toggleTheme")}
          </button>
        </div>
        <h1>{t("header.subtitle")}</h1>
        <p className="lede">
          Explore iconic dishes, discover new regions, and cook confidently with
          well-tested ingredient lists, prep tips, and plating ideas.
        </p>
        <div className="hero-actions">
          <div className="search-wrapper">
            <input
              type="search"
              placeholder={t("sections.searchPlaceholder")}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <span>⌘ + K</span>
          </div>
          <div className="stat-row">
            {stats.map((stat) => (
              <StatBadge key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </header>

      <section className="filter-section">
        <div className="filter-headline">
          <h2>{t("sections.explore")}</h2>
          <p>Tap a category to narrow the grid. Search stacks on top.</p>
        </div>
        <div className="pill-row">
          {recipeCategories.map((item) => (
            <button
              key={item}
              className={`pill ${item === category ? "active" : ""}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="grid-section">
        <div className="grid-headline">
          <div>
            <p className="eyebrow">{t("sections.popular")}</p>
            <h2>
              {category === "All" ? "Seasonless staples" : `${category} picks`}
            </h2>
            <p className="lede">
              {filteredRecipes.length} recipe
              {filteredRecipes.length === 1 ? "" : "s"} match your filters.
              Save, print, or tap for full detail.
            </p>
          </div>
          <div className="cta-card">
            <p>Want to add your heirloom recipe?</p>
            <button>{t("buttons.submit")}</button>
          </div>
        </div>

        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={setSelectedRecipe}
            />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="empty-state">
            <p>
              Nothing here yet. Try removing a filter or searching for a simpler
              term.
            </p>
          </div>
        )}
      </section>

      <section className="collections">
        <h2>{t("sections.explore")}</h2>
        <div className="collections-grid">
          {regionalCollections.map((collection) => (
            <article
              key={collection.name}
              className="collection-card"
              style={{ borderColor: collection.color }}
            >
              <div className="collection-dot" style={{ background: collection.color }} />
              <h3>{collection.name}</h3>
              <p>{collection.description}</p>
              <span>{collection.highlight}</span>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Spice Route Kitchen • Built with Vite + React</p>
        <p>
          Need more recipes? Track updates or contribute on GitHub once this repo
          is live.
        </p>
      </footer>

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
}

export default App;
