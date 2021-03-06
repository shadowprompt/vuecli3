export default {
  blocks1: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'A message *with some bold text* and _some italicized text_.',
      },
      block_id: 'text1',
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Pick a date for the deadline.',
      },
      accessory: {
        type: 'datepicker',
        initial_date: '1990-04-28',
        placeholder: {
          type: 'plain_text',
          text: 'Select a date',
          emoji: true,
        },
      },
    },
    {
      type: 'divider',
      block_id: 'divider1',
    },
    {
      type: 'image',
      title: {
        type: 'plain_text',
        text: 'Example Image',
        emoji: true,
      },
      image_url:
        'https://api.slack.com/img/blocks/bkb_template_images/goldengate.png',
      alt_text: 'Example Image',
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'You can add a button alongside text in your message. ',
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Button',
          emoji: true,
        },
        value: 'click_me_123',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'You can add a button alongside text in your message. ',
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Button',
          emoji: true,
        },
        value: 'click_me_123',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Take a look at this image.',
      },
      accessory: {
        type: 'image',
        image_url:
          'https://api.slack.com/img/blocks/bkb_template_images/palmtree.png',
        alt_text: 'palm tree',
      },
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'conversations_select',
          placeholder: {
            type: 'plain_text',
            text: 'Select a conversation',
            emoji: true,
          },
        },
        {
          type: 'channels_select',
          placeholder: {
            type: 'plain_text',
            text: 'Select a channel',
            emoji: true,
          },
        },
        {
          type: 'users_select',
          placeholder: {
            type: 'plain_text',
            text: 'Select a user',
            emoji: true,
          },
        },
        {
          type: 'static_select',
          placeholder: {
            type: 'plain_text',
            text: 'Select an item',
            emoji: true,
          },
          options: [
            {
              text: {
                type: 'plain_text',
                text: 'Excellent item 1',
                emoji: true,
              },
              value: 'value-0',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Fantastic item 2',
                emoji: true,
              },
              value: 'value-1',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Nifty item 3',
                emoji: true,
              },
              value: 'value-2',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Pretty good item 4',
                emoji: true,
              },
              value: 'value-3',
            },
          ],
        },
      ],
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'This block has an overflow menu.',
      },
      accessory: {
        type: 'overflow',
        options: [
          {
            text: {
              type: 'plain_text',
              text: 'Option 1',
              emoji: true,
            },
            value: 'value-0',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Option 2',
              emoji: true,
            },
            value: 'value-1',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Option 3',
              emoji: true,
            },
            value: 'value-2',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Option 42',
              emoji: true,
            },
            value: 'value-3',
          },
        ],
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Pick a date for the deadline.',
      },
      accessory: {
        type: 'datepicker',
        initial_date: '1990-04-28',
        placeholder: {
          type: 'plain_text',
          text: 'Select a date',
          emoji: true,
        },
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'This block has an overflow menu.',
      },
      accessory: {
        type: 'overflow',
        options: [
          {
            text: {
              type: 'plain_text',
              text: 'Option 1',
              emoji: true,
            },
            value: 'value-0',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Option 2',
              emoji: true,
            },
            value: 'value-1',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Option 3',
              emoji: true,
            },
            value: 'value-2',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Option 4',
              emoji: true,
            },
            value: 'value-3',
          },
        ],
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'plain_text',
          text: '*this is plain_text text*',
          emoji: true,
        },
        {
          type: 'plain_text',
          text: '*this is plain_text text*',
          emoji: true,
        },
        {
          type: 'plain_text',
          text: '*this is plain_text text*',
          emoji: true,
        },
        {
          type: 'plain_text',
          text: '*this is plain_text text*',
          emoji: true,
        },
        {
          type: 'plain_text',
          text: '*this is plain_text text*',
          emoji: true,
        },
      ],
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Button',
            emoji: true,
          },
          value: 'click_me_123',
        },
      ],
    },
  ],
  blocks2: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text:
          '*Type:*\nPaid time off dfadfadfadfadfadfddfafeefhfgfgfghfffgfg opppppdfadfadfa dfadfahljladfafdfadf0fefegggee1313\n*When:*\nAug 10-Aug 13\n*Hours:* 16.0 (2 days)\n*Remaining balance:* 32.0 hours (4 days)\n*Comments:* "Family in town, going camping!"',
      },
      accessory: {
        type: 'image',
        image_url:
          'https://api.slack.com/img/blocks/bkb_template_images/approvalsNewDevice.png',
        alt_text: 'computer thumbnail',
      },
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            emoji: true,
            text: 'Approve',
          },
          style: 'primary',
          value: 'click_me_123',
        },
        {
          type: 'button',
          text: {
            type: 'plain_text',
            emoji: true,
            text: 'Deny',
          },
          style: 'danger',
          value: 'click_me_123',
        },
      ],
    },
    {
      type: 'section',
      fields: [
        {
          type: 'plain_text',
          text: 'abc',
        },
      ],
      accessory: {
        type: 'image',
        image_url:
          'https://api.slack.com/img/blocks/bkb_template_images/palmtree.png',
        alt_text: 'palm tree',
      },
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: '*Author:* T. M. Schwartz',
        },
      ],
    },
    {
      type: 'image',
      title: {
        type: 'plain_text',
        text: 'image1',
        emoji: true,
      },
      image_url:
        'https://api.slack.com/img/blocks/bkb_template_images/beagle.png',
      alt_text: 'image1',
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'You can add an image next to text in this block.',
      },
      accessory: {
        type: 'image',
        image_url:
          'https://api.slack.com/img/blocks/bkb_template_images/plants.png',
        alt_text: 'plants',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'You can add a button alongside text in your message. ',
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Button',
          emoji: true,
        },
        value: 'click_me_123',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Pick an item from the dropdown list',
      },
      accessory: {
        type: 'static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select an item',
          emoji: true,
        },
        options: [
          {
            text: {
              type: 'plain_text',
              text: 'Choice 1',
              emoji: true,
            },
            value: 'value-0',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Choice 2',
              emoji: true,
            },
            value: 'value-1',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Choice 3',
              emoji: true,
            },
            value: 'value-2',
          },
        ],
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Pick one or more items from the list',
      },
      accessory: {
        type: 'multi_static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select an item',
          emoji: true,
        },
        options: [
          {
            text: {
              type: 'plain_text',
              text: 'Choice 1',
              emoji: true,
            },
            value: 'value-0',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Choice 2',
              emoji: true,
            },
            value: 'value-1',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Choice 3',
              emoji: true,
            },
            value: 'value-2',
          },
        ],
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'This block has an overflow menu.',
      },
      accessory: {
        type: 'overflow',
        options: [
          {
            text: {
              type: 'plain_text',
              text: 'Option 1',
              emoji: true,
            },
            value: 'value-0',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Option 2',
              emoji: true,
            },
            value: 'value-1',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Option 3',
              emoji: true,
            },
            value: 'value-2',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Option 4',
              emoji: true,
            },
            value: 'value-3',
          },
        ],
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Pick a date for the deadline.',
      },
      accessory: {
        type: 'datepicker',
        initial_date: '1990-04-28',
        placeholder: {
          type: 'plain_text',
          text: 'Select a date',
          emoji: true,
        },
      },
    },
  ],
};
