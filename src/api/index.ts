import AsyncTransformExecutor from './AsyncTransform/AsyncTransformExecutor.ts'
import Model from './Model/Model.ts'
import BooleanTransformer from './Transformers/BooleanTransformer'
import ModelTransformer from './Transformers/ModelTransformer'
import NumberTransformer from './Transformers/NumberTransformer'
import StringDateTransformer from './Transformers/StringDateTransformer'
import StringTransformer from './Transformers/StringTransformer'

const executor = new AsyncTransformExecutor()

executor.registerTransformer(new StringTransformer(), ['string'])
executor.registerTransformer(new StringDateTransformer(), ['string-date'])
executor.registerTransformer(new NumberTransformer(), ['number'])
executor.registerTransformer(new BooleanTransformer(), ['boolean', 'bool'])
executor.registerTransformer(new ModelTransformer(Model, executor.postTransform))

export const ApiProperty = executor.decorate.bind(executor)
export const transform = executor.transform.bind(executor)
export const transformMany = executor.transformMany.bind(executor)
