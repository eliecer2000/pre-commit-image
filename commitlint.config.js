module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'never', 600],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', ['upper-case']],
    'subject-min-length': [2, 'always', 10],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      ['hotfix', 'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'wip', 'perf', 'refactor', 'revert', 'style', 'test']
    ],
    'jira-project-id': [2, 'always']
  },
  plugins: [
    {
      rules: {
        // JIRA Project ID validation
        'jira-project-id': ({ scope }) => {
          const regexJiraFormat = /^[A-Z]+-\d+$/ // Validate format PROJ-123
          const regexUpperCase = /^[A-Z]+$/ // Validate only uppercase letters
          const regexLength = /^.{2,10}$/ // Minimum 2 and maximum 10 characters for the project ID
          const regexIssueNumberLength = /^[A-Z]+-\d{1,5}$/ // Issue number between 1 and 5 digits

          // Ensure the scope is not empty
          if (!scope) {
            return [false, 'The JIRA project ID cannot be empty']
          }

          // Ensure the scope contains only one hyphen as a separator
          if ((scope.match(/-/g) || []).length !== 1) {
            return [
              false,
              'The project ID must contain only one hyphen "-" to separate the project name and issue number'
            ]
          }

          // Validate that the project ID is uppercase
          if (!regexUpperCase.test(scope.split('-')[0])) {
            return [false, 'The project ID must be uppercase']
          }

          // Validate that the project ID has between 2 and 10 characters
          if (!regexLength.test(scope.split('-')[0])) {
            return [false, 'The project ID must be between 2 and 10 characters long']
          }

          // Validate the format PROJ-123
          if (!regexJiraFormat.test(scope)) {
            return [false, 'The format must be PROJ-123']
          }

          // Validate that the issue number is between 1 and 5 digits long
          if (!regexIssueNumberLength.test(scope)) {
            return [false, 'The issue number must be between 1 and 5 digits long']
          }

          return [true]
        }
      }
    }
  ],
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨'
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛'
          },
          wip: {
            description: 'Work In Progress',
            title: 'Work In Progress',
            emoji: '🛠'
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚'
          },
          style: {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎'
          },
          refactor: {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦'
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀'
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨'
          },
          build: {
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠'
          },
          ci: {
            description:
              'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '⚙️'
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '♻️'
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑'
          },
          // Agregar hotfix en el enum
          hotfix: {
            description: 'A critical bug fix applied to production',
            title: 'Hotfixes',
            emoji: '🚑'
          }
        }
      }
    }
  }
}
