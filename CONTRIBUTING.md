# Contributing to Astro Project Template

Thank you for considering contributing to this Astro project template! 🎉

## 📝 For Template Users

**Using this template for your own project?** You should customize this file:

1. **Update the title** - Replace "Astro Project Template" with your project name
2. **Modify guidelines** - Adjust contribution rules for your project's needs
3. **Update repository references** - Replace template URLs with your project URLs
4. **Add project-specific sections** - Include any unique contribution requirements

---

## 🚀 Contributing to the Template

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/danhendersonede/template-astro.git
   cd template-astro
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Development Workflow

### Making Changes

1. **Test your changes**

   ```bash
   npm run check    # Type checking
   npm run lint     # Linting
   npm run build    # Build verification
   ```

2. **Format your code**

   ```bash
   npm run format
   ```

3. **Commit your changes**
   - Pre-commit hooks will automatically run quality checks
   - Use conventional commit messages (e.g., `feat:`, `fix:`, `docs:`)

### Template-Specific Guidelines

- **Keep it generic**: Avoid project-specific code or configurations
- **Document changes**: Update README.md if you add new features
- **Test the template**: Ensure the template works correctly with your changes
- **Follow conventions**: Match existing patterns and structures

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:

```
feat: add TypeScript path aliases
fix: resolve ESLint configuration issue
docs: update deployment instructions
```

## 🧪 Testing Your Changes

Before submitting a PR:

1. **Verify all quality checks pass**

   ```bash
   npm run check && npm run lint && npm run build
   ```

2. **Test in a clean environment**
   - Create a new project using your changes
   - Ensure everything works as expected

## 📋 Pull Request Process

1. **Update documentation** if needed
2. **Ensure all tests pass**
3. **Fill out the PR template**
4. **Request review** from maintainers

### PR Guidelines

- **Clear title and description**
- **Reference related issues**
- **Include screenshots** for UI changes
- **Test instructions** for reviewers

## 🚫 What NOT to Include

- Project-specific configurations
- Hardcoded values or personal information
- Large dependencies without justification
- Breaking changes without migration guide
- Unused code or commented-out sections

## 🎯 Areas for Contribution

- **Performance improvements**
- **Accessibility enhancements**
- **SEO optimizations**
- **Developer experience improvements**
- **Documentation updates**
- **Bug fixes**
- **New integrations** (with justification)

## 🔍 Code Review Process

1. **Automated checks** must pass
2. **Manual review** by maintainers
3. **Discussion and iteration** if needed
4. **Approval and merge**

## 🆘 Getting Help

- **Questions?** Open an issue with the `question` label
- **Bug reports?** Use the bug report template
- **Feature requests?** Use the feature request template

## 📜 Code of Conduct

Be respectful, inclusive, and constructive in all interactions.

---

Thank you for contributing to making this template better for everyone! 🙏
