using System.Text.Json;

namespace LudoTecks.App_Code
{
    public class ViteManifestService
    {
        private readonly IWebHostEnvironment _env;
        private readonly string _manifestPath;

        public ViteManifestService(IWebHostEnvironment env)
        {
            this._env = env;
            this._manifestPath = Path.Combine(this._env.WebRootPath, "dist", "manifest.json");
        }

        public string GetAssetPath(string entry)
        {
            if (!this._env.IsProduction())
            {
                return $"http://localhost:5173/{entry}"; // Chemin pour le dev server de Vite
            }

            if (!File.Exists(this._manifestPath))
                throw new FileNotFoundException("Manifest file not found", this._manifestPath);

            var manifestJson = File.ReadAllText(this._manifestPath);
            var manifest = JsonSerializer.Deserialize<Dictionary<string, ManifestEntry>>(manifestJson);

            return manifest != null && manifest.TryGetValue(entry, out var entryData)
                ? $"/dist/{entryData.file}"
                : throw new Exception($"Entry {entry} not found in manifest");
        }

        private class ManifestEntry
        {
            public string file { get; set; }
        }
    }
}
