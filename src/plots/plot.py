import matplotlib.pyplot as plt
import pandas as pd
import mplcursors
from matplotlib.offsetbox import OffsetImage, AnnotationBbox
from PIL import Image
import io
import requests

# Sample Data: A fictional dataset of exoplanets
data = {
    'Name': ['Kepler-62f', 'Gliese 667 Cc', 'HD 40307g', '51 Pegasi b', 'TrES-2b', 
             'HR 8799e', 'GJ 1214b', 'WASP-17b'],
    'Type': ['Terrestrial', 'Super-Terrestrial', 'Neptunian', 'Gas Giant', 
             'Gas Giant', 'Gas Giant', 'Neptunian', 'Gas Giant'],
    'Radius_Earth': [1.4, 1.5, 2.0, 10.0, 20.0, 5.0, 3.0, 21.0],
    'Distance_LightYears': [1200, 23.62, 42.7, 50, 1050, 129, 48.6, 1080],
    'Orbital_Period_Days': [267, 28, 200, 4.2, 2.2, 252, 6.2, 3.7],
    'Fun_Fact': [
        "One of the most Earth-like planets discovered!",
        "Located in the habitable zone of its star.",
        "Has a thick atmosphere with clouds.",
        "The first exoplanet discovered orbiting a sun-like star.",
        "Known for its extremely low albedo, making it very dark.",
        "Part of a multi-planet system with stunning orbits.",
        "Known for its thick, steamy atmosphere.",
        "Orbits its star in less than 4 days!"
    ]
}

# Creating a DataFrame
df = pd.DataFrame(data)

# Assign colors based on exoplanet type
type_colors = {
    'Terrestrial': '#FF7F0E',       # Orange
    'Super-Terrestrial': '#2CA02C', # Green
    'Neptunian': '#1F77B4',         # Blue
    'Gas Giant': '#D62728'          # Red
}

df['Color'] = df['Type'].map(type_colors)

# Optional: If you have custom images for exoplanets, add their URLs or paths here
# For demonstration, we'll use colorful circles instead of images
# If you wish to use images, ensure they are accessible via URLs or local paths

# Create the bubble chart
fig, ax = plt.subplots(figsize=(12, 8))

# Set a space-themed background
space_image_url = "https://th.bing.com/th/id/OIP.Ahe9DNguvnqjyY0atWb3RAAAAA?rs=1&pid=ImgDetMain"  # Example space background image
response = requests.get(space_image_url)
img = Image.open(io.BytesIO(response.content))
ax.imshow(img, extent=[0, 1300, 0, 300], aspect='auto')

# Scatter plot with vibrant colors and sizes
scatter = ax.scatter(
    df['Distance_LightYears'], 
    df['Orbital_Period_Days'], 
    s=(df['Radius_Earth'] ** 2) * 100,  # Bubble size scaled by radius
    c=df['Color'], 
    alpha=0.8, 
    edgecolors='white',
    linewidth=2
)

# Adding a legend for exoplanet types
from matplotlib.patches import Patch
legend_elements = [Patch(facecolor=color, edgecolor='white', label=ptype) 
                   for ptype, color in type_colors.items()]
legend = ax.legend(handles=legend_elements, title='Exoplanet Types', 
                   title_fontsize='13', fontsize='11', 
                   facecolor='#1a1a1a', edgecolor='white')
legend.get_frame().set_alpha(0.8)

# Setting labels and title with playful fonts
ax.set_title('🌌 Explore the Wonders of Exoplanets! 🌟', fontsize=20, fontweight='bold', color='white', pad=20)
ax.set_xlabel('Distance from Earth (Light Years)', fontsize=14, color='white')
ax.set_ylabel('Orbital Period (Days)', fontsize=14, color='white')

# Customize tick parameters
ax.tick_params(axis='both', colors='white', labelsize=12)

# Remove spines for a cleaner look
for spine in ax.spines.values():
    spine.set_visible(False)

# Gridlines with transparency
ax.grid(True, color='white', alpha=0.3, linestyle='--', linewidth=0.5)

# Interactive Annotation using mplcursors
cursor = mplcursors.cursor(scatter, hover=True)

@cursor.connect("add")
def on_add(sel):
    index = sel.target.index
    planet = df.iloc[index]
    sel.annotation.get_bbox_patch().set(fc="black")
    sel.annotation.arrow_patch.set(arrowstyle="->", fc="black")
    sel.annotation.set_text(
        f"Name: {planet['Name']}\n"
        f"Type: {planet['Type']}\n"
        f"Radius: {planet['Radius_Earth']} Earth Radii\n"
        f"Distance: {planet['Distance_LightYears']} LY\n"
        f"Orbital Period: {planet['Orbital_Period_Days']} Days\n"
        f"Fun Fact: {planet['Fun_Fact']}"
    )
    sel.annotation.set_fontsize(12)
    sel.annotation.set_color('white')

# Enhance layout and aesthetics
plt.tight_layout()

# Show the plot
plt.show()
