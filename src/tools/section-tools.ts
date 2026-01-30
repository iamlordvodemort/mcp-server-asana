import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const addTaskToSectionTool: Tool = {
  name: "asana_add_task_to_section",
  description: "Move a task to a specific section within a project. This removes the task from other sections in that project and places it in the target section. Use this to move tasks between columns on a board or sections in a list view.",
  inputSchema: {
    type: "object",
    properties: {
      section_gid: {
        type: "string",
        description: "The globally unique identifier (GID) of the section to move the task to"
      },
      task_gid: {
        type: "string",
        description: "The globally unique identifier (GID) of the task to move"
      },
      insert_before: {
        type: "string",
        description: "A task GID to insert this task before. Cannot be used with insert_after. The task will be inserted at the end of the section if neither is specified."
      },
      insert_after: {
        type: "string",
        description: "A task GID to insert this task after. Cannot be used with insert_before. The task will be inserted at the top of the section if set to null."
      }
    },
    required: ["section_gid", "task_gid"]
  }
};
