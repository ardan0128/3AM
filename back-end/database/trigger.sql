CREATE TRIGGER trg_members_updated_at
    BEFORE UPDATE ON members
    FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trg_teams_updated_at
    BEFORE UPDATE ON teams
    FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trg_member_theme_updated_at
    BEFORE UPDATE ON member_themes
    FOR EACH ROW
EXECUTE FUNCTION update_updated_at();