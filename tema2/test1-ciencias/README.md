# test1 Apps Script diagnostic

This is a deliberately small and verbose test. It follows the same pattern as the working congress check-in script: a `doGet` function attached to a spreadsheet and a normal browser request containing a URL parameter.

Do not enter private information during this test. The value is transmitted in the URL.

## Phase 1: test the spreadsheet without GitHub

1. Create the Google spreadsheet named `test1`.
2. From that spreadsheet, select **Extensions → Apps Script**.
3. Replace the contents of `Code.gs` with the supplied `Code.gs` file and save it.
4. At the top of the Apps Script editor, select `testWriteFromEditor`.
5. Click **Run** and complete Google's authorization prompts.
6. Return to `test1`. The active sheet should contain `TEST FROM SCRIPT EDITOR` in column A.
7. Open **Executions**. The manual run should be listed, and its logs should identify the spreadsheet, sheet, row and value read back.

The manual test also stores the parent spreadsheet ID in Apps Script's Script Properties. This is required because Google does not make `getActiveSpreadsheet()` or `getActiveSheet()` available when a bound script runs as a web app. The deployed `doGet` therefore opens the stored spreadsheet ID and writes to its first sheet tab.

If this phase fails, GitHub and deployment are not involved. Read the error shown by the Apps Script editor or the corresponding execution.

## Phase 2: deploy the bound script

1. In Apps Script, select **Deploy → New deployment**.
2. Choose **Web app**.
3. Set **Execute as** to **Me**.
4. Set **Who has access** to **Anyone** for this unauthenticated diagnostic test.
5. Click **Deploy** and copy the URL ending in `/exec`.
6. Open that `/exec` URL directly in a private/incognito window.

Because no `name` parameter was supplied, the expected public result is a page saying `WRITE FAILED` and explaining that the `name` parameter is missing. This is useful: it proves that an unauthenticated browser can reach `doGet`. A Google sign-in page instead means the deployment is not public.

## Phase 3: connect the small web page

1. Open `script.js`.
2. Replace `PASTE_YOUR_APPS_SCRIPT_EXEC_URL_HERE` with the `/exec` URL from Phase 2.
3. Upload `index.html` and `script.js` to GitHub Pages.
4. Force-refresh the GitHub page.
5. Enter any non-private test value and click **Submit to Apps Script**.
6. A new tab should show `WRITE SUCCESSFUL`, including the spreadsheet name, sheet name, row, request ID and timing.
7. The original GitHub tab keeps a detailed page-side log. Apps Script keeps the matching server-side log under **Executions**.

## Where every class of error appears

- Missing or invalid deployment URL: red error on the GitHub page and its diagnostic log.
- JavaScript error: GitHub diagnostic log and browser developer console.
- Deployment access problem: Google sign-in or access-denied page in the new tab; no `doGet` execution.
- Apps Script runtime or spreadsheet error: `WRITE FAILED` page, including its stack trace, plus Apps Script **Executions**.
- Successful spreadsheet write: `WRITE SUCCESSFUL` page, Apps Script **Executions**, and the new value in column A of the active sheet.
- Code changed after deployment: create a new deployment version under **Deploy → Manage deployments**, then test the `/exec` URL again.
