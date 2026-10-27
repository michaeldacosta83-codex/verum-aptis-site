# Verum Aptis website — project handoff

Last updated: 2026-10-27

## Live website

- Site: https://michaeldacosta83-codex.github.io/verum-aptis-site/
- Repository: https://github.com/michaeldacosta83-codex/verum-aptis-site (branch: `main`)
- GitHub Pages: enabled; latest website source and company website field are committed and published.

## Enquiry form

The live form collects:

- Full name (required)
- Email address (required)
- Company (optional)
- Company website URL (optional)
- Enquiry (required)

The browser form sends these values to the configured Zapier Catch Hook, along with `source` and `submitted_at`. The hook URL is in `script.js`; it is intentionally not repeated in this handoff note.

## Zapier status and next steps

Zapier could not be inspected during the 2026-10-27 session because the available Zapier browser session was signed out. The connected Zapier MCP exposed Dynamics 365 only; Zapier Tables and Gmail were not connected there.

Earlier setup notes for the account:

- Table: “Verum Aptis Website Enquiries”
- Known table columns: Name, Email, Enquiry, Received, Status, Company, Follow-up notes
- The website now also sends `company_website`; add/map a matching table field if the table workflow needs it.
- A Gmail acknowledgement Zap was drafted with the submitted Email as recipient. It was reported inactive because Zapier required a first table record before it would let the workflow be verified.
- A separate Catch Hook workflow may be involved. Confirm that the hook is active and that its actions write the form data into the table before relying on the table-triggered acknowledgement.

### Resume checklist

1. Sign in to Zapier.
2. Inspect the Catch Hook Zap and confirm it receives the current form fields and creates a row in the table.
3. Add/map the optional Company website field.
4. Inspect the Gmail acknowledgement Zap, confirm its trigger and field mappings, and activate it after the user's real enquiry creates a record.
5. The user said they will submit a real enquiry. Do not create a setup/test enquiry or send a sample acknowledgement.
