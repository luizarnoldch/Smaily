import { memo } from 'react'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

const BodyCol = memo(({ item }) => {
	return <td>{item}</td>
})

const BodyRow = memo(({ items, type }) => {
	return (
		<tr>
			{Object.values(items).map((item, indexCol) => (
				<BodyCol item={item} key={indexCol} />
			))}
			<td className='flex-center gap-4'>
				<EditButton type={type} item={items} />
				<DeleteButton type={type} item={items} />
			</td>
		</tr>
	)
})

const TableHead = ({ data }) => {
	return (
		<thead className='border border-b-black'>
			<tr>
				{Object.keys(data[0]).map((item, index) => (
					<th key={index}>{item[0].toUpperCase() + item.substring(1)}</th>
				))}
				<th>Opciones</th>
			</tr>
		</thead>
	)
}

const TableBody = memo(({ data, type }) => {
	return (
		<tbody className='text-center'>
			{data.map((items, indexRow) => (
				<BodyRow items={items} key={indexRow} type={type} />
			))}
		</tbody>
	)
})

const TableFoot = () => {
	return <tfoot></tfoot>
}

const Table = ({ data, type }) => {
	return (
		<table className='container  mt-10 shadow-md rounded-md'>
			<TableHead data={data} />
			<TableBody data={data} type={type}/>
			<TableFoot />
		</table>
	)
}

export default memo(Table)
