using System.Text.Json;

namespace TestRazorWithReact.App_Code
{
    public record ManifestEntry(string file);

    public class ViteManifestWrapper(IWebHostEnvironment environment)
    {
        #region Public methods
        public string? GetJsPath(string tsxName)
        {
            string manifestPath = Path.Combine(this.Environment.WebRootPath, "js", ".vite", "manifest.json");

            if (!File.Exists(manifestPath))
            {
                throw new ArgumentNullException(manifestPath);
            }

            var jsonContent = File.ReadAllText(manifestPath);
            var manifest = JsonSerializer.Deserialize<Dictionary<string, ManifestEntry>>(jsonContent);

            if (manifest != null && manifest.TryGetValue(tsxName, out var entry))
            {
                return $"js/{entry.file}";
            }

            return null;
        }
        #endregion

        #region Properties
        public IWebHostEnvironment Environment { get; } = environment;
        #endregion
    }
}
