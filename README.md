# Project: Sigeburg "Trojan" Digital Catalog

This repository contains the source code for the "Catalogue" project, an interactive and embeddable digital catalog application built with React. It is designed to be dynamically driven by a single JSON data file for easy updates and management.

---

## Local Development

To run the project on a local machine for development purposes, follow these steps.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/EarthRideSky/interaktif-digital-catalog
    cd trojan-digital-catalog
    ```

2.  **Create Environment File:**
    Create a file named `.env` in the root of the project and add the following line. This tells the application where to find the data file during local development.
    ```
    REACT_APP_CATALOG_DATA_URL=/catalog_data.json
    ```

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Run the Application:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

---

## Updating Catalog Data

The catalog content is controlled entirely by the `public/catalog_data.json` file. To update the live, deployed catalog, follow this procedure:

1.  **Modify the Data:** Edit the `public/catalog_data.json` file with the new products, pages, or content. Ensure the JSON structure remains valid.
2.  **Commit Changes:** Commit the updated file to version control.
    ```bash
    git add public/catalog_data.json
    git commit -m "docs(data): Update catalog content for [Date or Version]"
    ```
3.  **Push to Main:** Push the commit to the `main` branch.
    ```bash
    git push origin main
    ```
4.  **Automatic Deployment:** Vercel will automatically detect the change, rebuild the application, and deploy the new version. No further action is required.

---

## Embedding the Catalog

To embed the deployed catalog into any client website, use the following HTML snippet. Replace `[VERCEL_DEPLOYMENT_URL]` with the actual URL provided by Vercel after a successful deployment.

```html
<iframe
    src="[VERCEL_DEPLOYMENT_URL]"
    title="Sigeburg Digital Catalog"
    style="width: 100%; height: 700px; border: none;"
    allowfullscreen>
</iframe>
```