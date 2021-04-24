import { AzureFunction, Context } from '@azure/functions'

const httpTrigger: AzureFunction = async function (
  context: Context,
): Promise<void> {
  const now = new Date(Date.now())
  const responseMessage = now + ' です'
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  }
}

export default httpTrigger
