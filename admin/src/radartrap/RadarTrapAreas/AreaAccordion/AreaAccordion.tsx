import PublicIcon from "@mui/icons-material/Public";
import { Box, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { FC, ReactElement, useState } from "react";
import { FormProvider } from "react-hook-form";
import { RadarTrapCronField, RadarTrapTextField } from "../..";
import { UseAccordionExpanded, useAreaAccordion } from "../../../lib";
import { AreaTrapMap, RadarTrapAccordion } from "../../../radartrap";
import { AreaModal } from "../AreaModal";

import type { FieldArrayWithId, UseFieldArrayRemove, UseFieldArrayUpdate } from "react-hook-form";

const Red = red[700];

interface AreaAccordionProps {
	expanded: UseAccordionExpanded["expanded"];
	accordionDisabledMap: Map<string | null, boolean>;
	handleChange: UseAccordionExpanded["handleChange"];
	update: UseFieldArrayUpdate<radarTrap.FormAreas, "areas">;
	remove: UseFieldArrayRemove;
	index: number;
	field: FieldArrayWithId<radarTrap.FormAreas, "areas">;
}

const AreaAccordion: FC<AreaAccordionProps> = ({
	expanded,
	accordionDisabledMap,
	handleChange,
	update,
	remove,
	index,
	field,
}): ReactElement => {
	const { methods, register, deleteHandler, createHandler } = useAreaAccordion({
		index,
		field,
		remove,
		update,
	});

	const {
		trigger,
		resetField,
		getFieldState,
		formState: { isValid, isDirty },
	} = methods;

	const [openModal, setOpenModal] = useState(false);

	const renderAreaModal = (
		<AreaModal {...{ openModal, setOpenModal }}>
			<AreaTrapMap />
		</AreaModal>
	);

	return (
		<>
			<FormProvider {...methods}>
				{renderAreaModal}

				<input type="hidden" {...register("_id")} />
				<input type="hidden" {...register("areaPolygons")} />

				<RadarTrapAccordion
					_id={field._id}
					id={field.id}
					description={field.description}
					{...{
						accordionDisabledMap,
						expanded,
						handleChange,
						deleteHandler,
						createHandler,
						isValid,
						isDirty,
					}}
				>
					<Stack spacing={2}>
						<Box sx={{ display: "flex" }}>
							<Box sx={{ flexGrow: 1 }}>
								<RadarTrapTextField
									disabled={accordionDisabledMap.get(field._id)!}
									name="description"
									label="description"
									type="text"
								/>
							</Box>
							<Box sx={{ pl: 2 }}>
								<IconButton
									onClick={() => {
										resetField("areaPolygons");
										trigger();
										setOpenModal(true);
									}}
									sx={[
										() => ({
											color: getFieldState("areaPolygons").invalid ? Red : undefined,
										}),
										{ p: 0, mr: 1 },
									]}
									edge="end"
									size="small"
								>
									<PublicIcon fontSize="large" />
								</IconButton>
							</Box>
						</Box>

						<RadarTrapCronField disabled={accordionDisabledMap.get(field._id)!} cronDefault={field.cron} />
					</Stack>
				</RadarTrapAccordion>
			</FormProvider>
		</>
	);
};

export { AreaAccordion };
